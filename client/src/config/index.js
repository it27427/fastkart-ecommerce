const types = {
  INPUT: 'input',
  SELECT: 'select',
  TEXTAREA: 'textarea',
};

export const RegisterFormControls = [
  {
    label: 'User Name',
    type: 'text',
    name: 'userName',
    placeholder: 'Enter your user name',
    componentType: types.INPUT,
  },
  {
    label: 'Email Address',
    type: 'email',
    name: 'email',
    placeholder: 'Enter your e-mail address',
    componentType: types.INPUT,
  },
  {
    label: 'Phone Number',
    type: 'tel',
    name: 'phone',
    placeholder: 'Enter your phone number',
    componentType: types.INPUT,
  },
  {
    label: 'Password',
    type: 'password',
    name: 'password',
    placeholder: 'Enter your password',
    componentType: types.INPUT,
  },
];

export const LoginFormControls = [
  {
    label: 'Email Address',
    type: 'email',
    name: 'email',
    placeholder: 'Enter your e-mail address',
    componentType: types.INPUT,
  },
  {
    label: 'Password',
    type: 'password',
    name: 'password',
    placeholder: 'Enter your password',
    componentType: types.INPUT,
  },
];

export const addProductFormElements = [
  {
    label: 'Title',
    name: 'title',
    componentType: types.INPUT,
    type: 'text',
    placeholder: 'Enter product title',
  },
  {
    label: 'Description',
    name: 'description',
    componentType: types.TEXTAREA,
    placeholder: 'Enter product description',
  },
  {
    label: 'Category',
    name: 'category',
    componentType: types.SELECT,
    options: [
      {
        id: 'men',
        label: 'Men',
      },
      {
        id: 'women',
        label: 'Women',
      },
      {
        id: 'kids',
        label: 'Kids',
      },
      {
        id: 'accessories',
        label: 'Accessories',
      },
      {
        id: 'footwear',
        label: 'Footwear',
      },
    ],
    placeholder: 'Select Category',
  },
  {
    label: 'Brand',
    name: 'brand',
    componentType: types.SELECT,
    options: [
      {
        id: 'nike',
        label: 'Nike',
      },
      {
        id: 'adidas',
        label: 'Adidas',
      },
      {
        id: 'puma',
        label: 'Puma',
      },
      {
        id: 'levi',
        label: "Levi's",
      },
      {
        id: 'zara',
        label: 'Zara',
      },
      {
        id: 'h&m',
        label: 'H&M',
      },
    ],
    placeholder: 'Select Brand',
  },
  {
    label: 'Size',
    name: 'size',
    componentType: types.SELECT,
    options: [
      {
        label: 'XS',
        value: 'xs',
      },
      {
        label: 'S',
        value: 's',
      },
      {
        label: 'M',
        value: 'm',
      },
      {
        label: 'L',
        value: 'l',
      },
      {
        label: 'XL',
        value: 'xl',
      },
      {
        label: 'XXL',
        value: 'xxl',
      },
    ],
    placeholder: 'Select Size',
  },
  {
    label: 'Color',
    name: 'color',
    componentType: types.SELECT,
    options: [
      {
        label: 'Red',
        value: 'red',
      },
      {
        label: 'Blue',
        value: 'blue',
      },
      {
        label: 'Green',
        value: 'green',
      },
      {
        label: 'Yellow',
        value: 'yellow',
      },
      {
        label: 'Orange',
        value: 'orange',
      },
      {
        label: 'Purple',
        value: 'purple',
      },
      {
        label: 'Pink',
        value: 'pink',
      },
      {
        label: 'Black',
        value: 'black',
      },
      {
        label: 'White',
        value: 'white',
      },
      {
        label: 'Gray',
        value: 'gray',
      },
      {
        label: 'Brown',
        value: 'brown',
      },
      {
        label: 'Cyan',
        value: 'cyan',
      },
      {
        label: 'Magenta',
        value: 'magenta',
      },
    ],
    placeholder: 'Select Color',
  },
  {
    label: 'Price',
    name: 'price',
    componentType: types.INPUT,
    type: 'number',
    placeholder: 'Enter product price',
  },
  {
    label: 'Sale Price',
    name: 'salePrice',
    componentType: types.INPUT,
    type: 'number',
    placeholder: 'Enter sale price (optional)',
  },
  {
    label: 'Total Stock',
    name: 'totalStock',
    componentType: types.INPUT,
    type: 'number',
    placeholder: 'Enter total stock',
  },
];

export const shopHeaderMenuItems = [
  {
    id: 'home',
    label: 'Home',
    path: '/',
  },
  {
    id: 'products',
    label: 'Products',
    path: '/shop',
  },
  {
    id: 'men',
    label: 'Men',
    path: '/shop',
  },
  {
    id: 'women',
    label: 'Women',
    path: '/shop',
  },
  {
    id: 'kids',
    label: 'Kids',
    path: '/shop',
  },
  {
    id: 'footwear',
    label: 'Footwear',
    path: '/shop',
  },
  {
    id: 'accessories',
    label: 'Accessories',
    path: '/shop',
  },
  {
    id: 'search',
    label: 'Search',
    path: '/shop',
  },
];

export const categoryOptionsMap = {
  men: 'Men',
  women: 'Women',
  kids: 'Kids',
  accessories: 'Accessories',
  footwear: 'Footwear',
};

export const brandOptionsMap = {
  nike: 'Nike',
  adidas: 'Adidas',
  puma: 'Puma',
  levi: 'Levi',
  zara: 'Zara',
  'h&m': 'H&M',
};

export const filterOptions = {
  category: [
    {
      id: 'men',
      label: 'Men',
    },
    {
      id: 'women',
      label: 'Women',
    },
    {
      id: 'kids',
      label: 'Kids',
    },
    {
      id: 'accessories',
      label: 'Accessories',
    },
    {
      id: 'footwear',
      label: 'Footwear',
    },
  ],
  brand: [
    {
      id: 'nike',
      label: 'Nike',
    },
    {
      id: 'adidas',
      label: 'Adidas',
    },
    {
      id: 'puma',
      label: 'Puma',
    },
    {
      id: 'levi',
      label: "Levi's",
    },
    {
      id: 'zara',
      label: 'Zara',
    },
    {
      id: 'h&m',
      label: 'H&M',
    },
  ],
};

export const sortOptions = [
  {
    id: 'price-lowtohigh',
    label: 'Price: Low to High',
  },
  {
    id: 'price-hightolow',
    label: 'Price: High to Low',
  },
  {
    id: 'title-atoz',
    label: 'Title: A to Z',
  },
  {
    id: 'title-ztoa',
    label: 'Title: Z to A',
  },
];

export const addressFormControls = [
  {
    label: 'Address',
    name: 'address',
    componentType: types.INPUT,
    type: 'text',
    placeholder: 'Enter your address',
  },
  {
    label: 'City',
    name: 'city',
    componentType: types.INPUT,
    type: 'text',
    placeholder: 'Enter your city',
  },
  {
    label: 'Pincode',
    name: 'pincode',
    componentType: types.INPUT,
    type: 'number',
    placeholder: 'Enter your pincode',
  },
  {
    label: 'Phone',
    name: 'phone',
    componentType: types.INPUT,
    type: 'tel',
    placeholder: 'Enter your phone number',
  },
  {
    label: 'Notes',
    name: 'notes',
    componentType: types.TEXTAREA,
    placeholder: 'Enter any additional notes',
  },
];
