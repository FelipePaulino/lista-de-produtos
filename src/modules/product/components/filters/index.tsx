"use client";

import { Search } from "lucide-react";

import { useFilters } from "@/modules/product/hooks";
import {
  Button,
  Label,
  RadioGroup,
  RadioGroupItem,
} from "@/shared/components/external";

export const Filters = () => {
  const {
    search,
    sortPrice,
    onChangeInput,
    handleSubmit,
    onClearFilters,
    handleSortPrice,
  } = useFilters();

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full container mx-auto px-4 flex-wrap">
      <RadioGroup
        className="flex items-center gap-2"
        onValueChange={handleSortPrice}
        defaultValue={sortPrice}
        value={sortPrice}
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="min" id="min" />
          <Label htmlFor="min">Valor Mínimo</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="max" id="max" />
          <Label htmlFor="max">Valor Máximo</Label>
        </div>
      </RadioGroup>

      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-between gap-2 bg-white rounded-full py-2 px-4 border w-full md:w-96"
      >
        <input
          type="text"
          value={search}
          onChange={onChangeInput}
          className="outline-none w-full"
          placeholder="Pesquisar seu produto"
        />

        <button className="cursor-pointer">
          <Search className="text-green-700 w-4 h-4" />
        </button>
      </form>

      <Button
        type="button"
        variant="outline"
        className="cursor-pointer flex items-center gap-2 text-slate-600 hover:text-slate-900"
        onClick={onClearFilters}
      >
        Limpar filtros
      </Button>
    </div>
  );
};
