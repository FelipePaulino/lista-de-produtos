"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

import {
  Form,
  Input,
  Button,
  Dialog,
  Textarea,
  FormItem,
  FormField,
  FormLabel,
  ScrollArea,
  FormControl,
  DialogTitle,
  FormMessage,
  DialogContent,
  DialogTrigger,
} from "@/shared/components/external";
import { useAddProduct } from "@/modules/product/hooks";

export function DialogAddProduct() {
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const handleVisibilityModal = () => setIsVisibleModal((prev) => !prev);

  const { form, onSubmit } = useAddProduct(handleVisibilityModal);

  return (
    <Dialog open={isVisibleModal} onOpenChange={handleVisibilityModal}>
      <DialogTrigger asChild>
        <Button type="button" className="cursor-pointer">
          Adicionar produto <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Adicionar Produto</DialogTitle>

        <ScrollArea className="h-[400px]">
          <Form {...form}>
            <form onSubmit={onSubmit} className="space-y-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome do produto</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Digite o nome do produto"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preço do produto</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Digite o preço do produto"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Categoria</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Digite a categoria do produto"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="thumbnail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>URL da imagem</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Digite a URL da imagem do produto"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descrição</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Digite a descrição do produto"
                        className="resize-none"
                        rows={4}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                size="lg"
                className="w-full"
                disabled={
                  form.formState.isSubmitting || !form.formState.isValid
                }
              >
                Adicionar produto
              </Button>
            </form>
          </Form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
