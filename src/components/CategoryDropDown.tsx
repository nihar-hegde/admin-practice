import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getAllCategory } from "@/lib/actions/category.action";
import { useEffect, useState } from "react";

type DropDownProps = {
  value?: string;
  onChangeHandler?: () => void;
};
interface ICategory {
  id: string;
  category: string;
}

const CategoryDropDown = ({ value, onChangeHandler }: DropDownProps) => {
  const [category, setCategory] = useState<ICategory[]>([]);

  useEffect(() => {
    const getCategory = async () => {
      const categoryList = await getAllCategory();
      categoryList && setCategory(categoryList as ICategory[]);
    };
    getCategory();
  }, []);

  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger>
        <SelectValue placeholder="Categories" />
      </SelectTrigger>
      <SelectContent>
        {category?.map((item) => (
          <SelectItem key={item.id} value={item.id}>
            {item.category}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CategoryDropDown;
