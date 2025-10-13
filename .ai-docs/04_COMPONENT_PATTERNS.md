# 🧩 COMPONENT PATTERNS - CREATIVOS ESPACIOS

**Purpose:** Reusable templates and patterns for consistent page creation
**Last Updated:** 2025-10-13

---

## 📋 TABLE OF CONTENTS

1. Basic Page Structure
2. Banner/Hero Section
3. Content Section with Cards
4. Form Components
5. Gallery/Grid Layouts
6. Interactive Elements
7. SCSS Patterns

---

## 1️⃣ BASIC PAGE STRUCTURE

### Standard Page Template

```jsx
// src/pages/PageName/PageName.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './PageName.scss';

const PageName = () => {
  return (
    <div className="page-name">
      {/* Banner Section */}
      <section className="page-name__banner">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="page-name__banner-title">Page Title</h1>
              <p className="page-name__banner-subtitle">Brief description</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Content Section */}
      <section className="page-name__content">
        <Container>
          <Row>
            <Col lg={10} className="mx-auto">
              {/* Main content */}
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default PageName;
```

### Corresponding SCSS Template

```scss
// src/pages/PageName/PageName.scss
@import '../../styles/variables';
@import '../../styles/mixins';

.page-name {
  font-family: $font-parrafos;

  // Banner section
  &__banner {
    min-height: 300px;
    background: linear-gradient(135deg, $color-calipso 0%, darken($color-calipso, 10%) 100%);
    color: $color-blanco;
    display: flex;
    align-items: center;
    padding: $spacing-3xl $spacing-md;

    @media (max-width: $breakpoint-md) {
      min-height: 250px;
      padding: $spacing-2xl $spacing-md;
    }
  }

  &__banner-title {
    font-family: $font-titulos;
    font-size: $font-size-3xl;
    font-weight: $font-weight-bold;
    margin-bottom: $spacing-md;

    @media (max-width: $breakpoint-md) {
      font-size: $font-size-2xl;
    }
  }

  &__banner-subtitle {
    font-size: $font-size-lg;
    opacity: 0.9;

    @media (max-width: $breakpoint-md) {
      font-size: $font-size-base;
    }
  }

  // Content section
  &__content {
    padding: $spacing-3xl 0;

    @media (max-width: $breakpoint-md) {
      padding: $spacing-2xl 0;
    }
  }
}
```

---

## 2️⃣ BANNER/HERO SECTION

### Pattern 1: Simple Gradient Banner

```jsx
<section className="page-name__banner">
  <Container>
    <Row className="justify-content-center text-center">
      <Col lg={8}>
        <h1 className="page-name__banner-title">Title</h1>
        <p className="page-name__banner-subtitle">Subtitle</p>
      </Col>
    </Row>
  </Container>
</section>
```

```scss
&__banner {
  background: linear-gradient(135deg, $color-calipso 0%, darken($color-calipso, 10%) 100%);
  color: $color-blanco;
  padding: $spacing-3xl $spacing-md;
  min-height: 300px;
  display: flex;
  align-items: center;
}
```

### Pattern 2: Banner with Background Image

```jsx
<section className="page-name__banner"
  style={{backgroundImage: 'url(/assets/images/banner.jpg)'}}>
  {/* Content */}
</section>
```

```scss
&__banner {
  background-size: cover;
  background-position: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba($color-calipso, 0.8);
  }
}
```

### Pattern 3: Banner with Breadcrumb

```jsx
import { Breadcrumb } from 'react-bootstrap';

<section className="page-name__banner">
  <Container>
    <Breadcrumb className="page-name__breadcrumb">
      <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
      <Breadcrumb.Item active>Current Page</Breadcrumb.Item>
    </Breadcrumb>
    <h1 className="page-name__banner-title">Title</h1>
  </Container>
</section>
```

---

## 3️⃣ CONTENT SECTION WITH CARDS

### Pattern 1: Card Grid (3 columns)

```jsx
<section className="page-name__cards">
  <Container>
    <h2 className="page-name__section-title text-center mb-5">
      Section Title
    </h2>
    <Row>
      {items.map((item, index) => (
        <Col key={index} lg={4} md={6} className="mb-4">
          <Card className="page-name__card h-100">
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title className="page-name__card-title">
                {item.title}
              </Card.Title>
              <Card.Text className="page-name__card-text">
                {item.description}
              </Card.Text>
              <Button variant="primary">Ver más</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
</section>
```

```scss
&__cards {
  padding: $spacing-3xl 0;
}

&__card {
  border: none;
  border-radius: $border-radius-lg;
  box-shadow: $shadow-md;
  transition: $transition-base;

  &:hover {
    transform: translateY(-8px);
    box-shadow: $shadow-xl;
  }
}

&__card-title {
  font-family: $font-titulos;
  font-size: $font-size-lg;
  font-weight: $font-weight-bold;
  color: $color-calipso;
  margin-bottom: $spacing-md;
}

&__card-text {
  color: $color-gris-oscuro;
  font-size: $font-size-base;
  line-height: $line-height-relaxed;
}
```

### Pattern 2: Icon Cards

```jsx
const features = [
  { icon: '🚚', title: 'Transport', description: 'Fast delivery' },
  { icon: '🔧', title: 'Maintenance', description: 'Regular service' },
  { icon: '📞', title: 'Support', description: '24/7 assistance' }
];

<Row>
  {features.map((feature, index) => (
    <Col key={index} lg={4} className="mb-4">
      <div className="page-name__feature-card text-center">
        <div className="page-name__feature-icon">{feature.icon}</div>
        <h3 className="page-name__feature-title">{feature.title}</h3>
        <p className="page-name__feature-text">{feature.description}</p>
      </div>
    </Col>
  ))}
</Row>
```

```scss
&__feature-card {
  padding: $spacing-xl;
  border-radius: $border-radius-lg;
  background: $color-blanco;
  box-shadow: $shadow-md;
  transition: $transition-base;

  &:hover {
    box-shadow: $shadow-lg;
  }
}

&__feature-icon {
  font-size: 3rem;
  margin-bottom: $spacing-lg;
}

&__feature-title {
  font-family: $font-titulos;
  font-size: $font-size-lg;
  font-weight: $font-weight-semibold;
  color: $color-calipso;
  margin-bottom: $spacing-md;
}
```

---

## 4️⃣ FORM COMPONENTS

### Pattern 1: Simple Contact Form (Formik + Yup)

```jsx
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Nombre es requerido'),
    email: Yup.string().email('Email inválido').required('Email es requerido'),
    message: Yup.string().required('Mensaje es requerido')
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="contact-form">
          <div className="contact-form__field">
            <label htmlFor="name">Nombre</label>
            <Field type="text" name="name" className="form-control" />
            <ErrorMessage name="name" component="div" className="contact-form__error" />
          </div>

          <div className="contact-form__field">
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" className="form-control" />
            <ErrorMessage name="email" component="div" className="contact-form__error" />
          </div>

          <div className="contact-form__field">
            <label htmlFor="message">Mensaje</label>
            <Field as="textarea" name="message" rows="5" className="form-control" />
            <ErrorMessage name="message" component="div" className="contact-form__error" />
          </div>

          <button type="submit" disabled={isSubmitting} className="btn btn-primary">
            Enviar
          </button>
        </Form>
      )}
    </Formik>
  );
};
```

```scss
.contact-form {
  &__field {
    margin-bottom: $spacing-lg;

    label {
      display: block;
      font-weight: $font-weight-semibold;
      margin-bottom: $spacing-sm;
      color: $color-gris-oscuro;
    }
  }

  &__error {
    color: $color-error;
    font-size: $font-size-sm;
    margin-top: $spacing-xs;
  }
}
```

---

## 5️⃣ GALLERY/GRID LAYOUTS

### Pattern 1: Image Gallery with Lightbox

```jsx
import { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, src: '/images/1.jpg', alt: 'Image 1' },
    { id: 2, src: '/images/2.jpg', alt: 'Image 2' },
    // ...
  ];

  return (
    <>
      <Row className="gallery">
        {images.map((image) => (
          <Col key={image.id} lg={4} md={6} className="mb-4">
            <div className="gallery__item" onClick={() => setSelectedImage(image)}>
              <img src={image.src} alt={image.alt} className="gallery__image" />
            </div>
          </Col>
        ))}
      </Row>

      {selectedImage && (
        <div className="gallery__lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage.src} alt={selectedImage.alt} />
        </div>
      )}
    </>
  );
};
```

```scss
.gallery {
  &__item {
    cursor: pointer;
    overflow: hidden;
    border-radius: $border-radius-lg;
    height: 250px;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: $transition-base;

    &:hover {
      transform: scale(1.1);
    }
  }

  &__lightbox {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    cursor: pointer;

    img {
      max-width: 90%;
      max-height: 90%;
    }
  }
}
```

---

## 6️⃣ INTERACTIVE ELEMENTS

### Pattern 1: Accordion (FAQ)

```jsx
import { Accordion } from 'react-bootstrap';

const FAQ = () => {
  const faqs = [
    { question: 'Question 1?', answer: 'Answer 1' },
    { question: 'Question 2?', answer: 'Answer 2' },
  ];

  return (
    <Accordion defaultActiveKey="0" className="faq-accordion">
      {faqs.map((faq, index) => (
        <Accordion.Item key={index} eventKey={index.toString()}>
          <Accordion.Header>{faq.question}</Accordion.Header>
          <Accordion.Body>{faq.answer}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};
```

```scss
.faq-accordion {
  .accordion-item {
    border: 1px solid $color-gris-claro;
    border-radius: $border-radius-md;
    margin-bottom: $spacing-md;
  }

  .accordion-header {
    button {
      font-family: $font-titulos;
      font-weight: $font-weight-semibold;
      color: $color-calipso;
      font-size: $font-size-lg;

      &:not(.collapsed) {
        background-color: lighten($color-calipso, 45%);
      }
    }
  }

  .accordion-body {
    font-size: $font-size-base;
    line-height: $line-height-relaxed;
  }
}
```

### Pattern 2: Tabs

```jsx
import { Tabs, Tab } from 'react-bootstrap';

<Tabs defaultActiveKey="tab1" className="custom-tabs mb-4">
  <Tab eventKey="tab1" title="Tab 1">
    <p>Content for tab 1</p>
  </Tab>
  <Tab eventKey="tab2" title="Tab 2">
    <p>Content for tab 2</p>
  </Tab>
</Tabs>
```

---

## 7️⃣ SCSS PATTERNS

### Pattern 1: Hover Lift Effect

```scss
.card {
  transition: transform $transition-base, box-shadow $transition-base;

  &:hover {
    transform: translateY(-8px);
    box-shadow: $shadow-xl;
  }
}
```

### Pattern 2: Gradient Overlay

```scss
.banner {
  position: relative;
  background-image: url('/image.jpg');
  background-size: cover;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba($color-calipso, 0.9), rgba($color-naranja, 0.7));
  }

  &__content {
    position: relative;
    z-index: 1;
  }
}
```

### Pattern 3: Responsive Typography

```scss
.title {
  font-size: $font-size-3xl;

  @media (max-width: $breakpoint-lg) {
    font-size: $font-size-2xl;
  }

  @media (max-width: $breakpoint-md) {
    font-size: $font-size-xl;
  }
}
```

---

## ✅ CHECKLIST FOR NEW PAGES

When creating a new page, ensure:

- [ ] Component file created: `src/pages/PageName/PageName.jsx`
- [ ] SCSS file created: `src/pages/PageName/PageName.scss`
- [ ] Import variables and mixins in SCSS
- [ ] Use BEM naming convention
- [ ] Add route to `App.js`
- [ ] Import React Bootstrap components
- [ ] Add responsive breakpoints
- [ ] Test on mobile, tablet, desktop
- [ ] Verify colors match design system
- [ ] Check spacing matches design
- [ ] Add hover states where appropriate
- [ ] Export default component

---

**Token Count:** ~200 lines | Reusable patterns and templates
