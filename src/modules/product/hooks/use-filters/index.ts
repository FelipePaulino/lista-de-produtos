import {
  useState,
  FormEvent,
  useEffect,
  ChangeEvent,
  useCallback,
} from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function useFilters() {
  const [sortPrice, setSortPrice] = useState("");
  const [search, setSearch] = useState("");

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  /**
   * @description Change input value
   * @param e - Change event
   * @returns void
   */
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  /**
   * @description Create query string
   * @param name - Name of the query parameter
   * @param value - Value of the query parameter
   * @returns string
   */
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  /**
   * @description Create query string and redirect to home page
   * @param e - Form event
   * @returns void
   */
  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const queryString = createQueryString("search", search);
      const hasSearch = !!search.length;

      if (!hasSearch) {
        router.push(`${pathname}`);

        return;
      }

      router.push(`${pathname}?${queryString}`);
    },
    [createQueryString, pathname, router, search]
  );

  /**
   * @description Clear search and redirect to home page
   * @returns void
   */
  const onClearFilters = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("search");
    params.delete("sortPrice");

    router.push(`${pathname}?${params.toString()}`);

    setSearch("");
    setSortPrice("");
  }, [pathname, router, searchParams]);

  /**
   * @description Handle sort price
   * @param value - Value of the sort price
   * @returns void
   */
  const handleSortPrice = useCallback(
    (value: string) => {
      const queryString = createQueryString("sortPrice", value);
      router.push(`${pathname}?${queryString}`);

      setSortPrice(value);
    },
    [createQueryString, pathname, router, setSortPrice]
  );

  useEffect(() => {
    const search = searchParams.get("search");
    setSearch(search ?? "");
  }, [searchParams]);

  useEffect(() => {
    const sortPrice = searchParams.get("sortPrice");
    setSortPrice(sortPrice ?? "");
  }, [searchParams]);

  return {
    search,
    sortPrice,
    handleSubmit,
    onChangeInput,
    onClearFilters,
    handleSortPrice,
  };
}
