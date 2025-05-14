import { Prisma } from "@/generated/prisma";
import { prisma } from "@/shared/lib";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const page = searchParams.get("page") || "0";
  const search = searchParams.get("search") || "";
  const sortPrice = searchParams.get("sortPrice") || "";

  const orderBy: Prisma.ProductOrderByWithRelationInput =
    sortPrice === "min"
      ? { price: "asc" }
      : sortPrice === "max"
      ? { price: "desc" }
      : { createdAt: "desc" };

  const [products, totalElements] = await Promise.all([
    prisma.product.findMany({
      orderBy,
      where: {
        title: {
          contains: search,
          mode: "insensitive",
        },
      },
      skip: parseInt(page) * 10,
      take: 10,
    }),
    prisma.product.count(),
  ]);

  return NextResponse.json({
    products,
    metadata: {
      totalElements,
      limit: 10,
      page: parseInt(page),
      totalPages: Math.ceil(totalElements / 10),
      isDisabledPrevious: parseInt(page) === 0,
      isDisabledNext: parseInt(page) === Math.ceil(totalElements / 10) - 1,
    },
  });
}

export async function POST(req: Request) {
  const body = await req.json();

  const product = await prisma.product.create({
    data: {
      title: body.title,
      price: body.price,
      category: body.category,
      description: body.description,
      thumbnail: body.thumbnail,
    },
  });

  return NextResponse.json(product, { status: 201 });
}

export async function DELETE(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;

  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { message: "ID do produto não fornecido" },
      { status: 400 }
    );
  }

  await prisma.product.delete({
    where: { id: parseInt(id) },
  });

  return NextResponse.json(
    { message: "Produto deletado com sucesso" },
    { status: 200 }
  );
}
