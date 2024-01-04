type ItemType = {
  title?: string;
  children?: { title: string; id: number };
  id: number;
};

export default ItemType;
