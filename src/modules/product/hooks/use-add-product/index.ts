import { toast } from "sonner";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import { ProductService } from "@/modules/product/services";
import { addProductSchema, AddProductSchema } from "@/modules/product/schemas";

export function useAddProduct(onClose: () => void) {
  const router = useRouter();

  const form = useForm<AddProductSchema>({
    resolver: zodResolver(addProductSchema),
    mode: "onBlur",
    defaultValues: {
      title: "",
      price: 0,
      category: "",
      description: "",
      thumbnail: "",
    },
  });

  /**
   * @description Submit form to create product
   * @param data - Form data
   * @returns void
   */
  const onSubmit = form.handleSubmit(async (data: AddProductSchema) => {
    try {
      await ProductService.create(data);

      toast("Sucesso", {
        description: "Produto criado com sucesso",
      });

      form.reset();
      form.clearErrors();

      router.refresh();
      onClose();
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message || "Erro ao criar produto");

        toast("Erro", {
          description: error.message || "Erro ao criar produto",
        });
      }
    }
  });

  useEffect(() => {
    form.reset();
    form.clearErrors();
  }, []);

  return {
    form,
    onSubmit,
  };
}
