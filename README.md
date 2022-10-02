### goit-react-03-reader

- [Yup](https://www.npmjs.com/package/yup)
- [Formik](https://formik.org/)

```js
const products = ['Sweater', 'Keyboard', 'Sofa', 'Freezer'];

const validationSchema = Yup.object({
  product: Yup.string().required('Please select a product').oneOf(products),
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  title: Yup.string().required(),
  review: Yup.string().required(),
  rating: Yup.number().min(1).max(10).required(),
  date: Yup.date().default(() => new Date()),
  wouldRecommend: Yup.boolean().default(false),
});

const initialValues = {
  name: '',
  email: '',
  title: '',
  review: '',
  rating: '',
  date: new Date(),
  wouldRecommend: false,
  product: '',
};
```

```jsx

```

### ~ 00:30:00 - Разбор компонентна ImageGallery

### - 00:37:26 - Formik

### - 01:29:00 - Reader
