/* eslint-disable jsx-a11y/label-has-associated-control */
import { CheckOutlined, LoadingOutlined } from '@ant-design/icons';
import { ImageLoader } from '@/components/common';
import {
  CustomCreatableSelect, CustomInput, CustomTextarea
} from '@/components/formik';
import {
  Field, FieldArray, Form, Formik
} from 'formik';
import { useFileHandler } from '@/hooks';
import PropType from 'prop-types';
import React from 'react';
import * as Yup from 'yup';



const FormSchema = Yup.object().shape({
  name: Yup.string()
    .required('Product name is required.')
    .max(60, 'Product name must only be less than 60 characters.'),
  brand: Yup.string()
    .required('Location is required.'),
  price: Yup.number()
    .positive('Price is invalid.')
    .integer('Price should be an integer.')
    .required('Price is required.'),
  description: Yup.string()
    .required('Description is required.'),
  orariolunedi: Yup.string()
    .required('Description is required.'),
  orariomartedi: Yup.string()
    .required('Description is required.'),
  orariomercoledi: Yup.string()
    .required('Description is required.'),
  orariogiovedi: Yup.string()
    .required('Description is required.'),
  orariovenerdi: Yup.string()
    .required('Description is required.'),
  orariosabato: Yup.string()
    .required('Description is required.'),
  orariodomenica: Yup.string()
    .required('Description is required.'),
  

  isFeatured: Yup.boolean(),
  isRecommended: Yup.boolean(),
  
});

const ProductForm = ({ product, onSubmit, isLoading }) => {
  const initFormikValues = {
    name: product?.name || '',
    brand: product?.brand || '',
    price: product?.price || 0,
    orariolunedi: product?.orariolunedi || '',
    orariomartedi: product?.orariomartedi || '',
    orariomercoledi: product?.orariomercoledi || '',
    orariogiovedi: product?.orariogiovedi || '',
    orariovenerdi: product?.orariovenerdi || '',
    orariosabato: product?.orariosabato || '',
    orariodomenica: product?.orariodomenica || '',
    
    description: product?.description || '',
    
    isFeatured: product?.isFeatured || false,
    isRecommended: product?.isRecommended || false,
    
  };

  const {
    imageFile,
    isFileLoading,
    onFileChange,
    removeImage
  } = useFileHandler({ image: {}, imageCollection: product?.imageCollection || [] });

  const onSubmitForm = (form) => {
    if (imageFile.image.file || product.imageUrl) {
      onSubmit({
        ...form,
        quantity: 1,
        // due to firebase function billing policy, let's add lowercase version
        // of name here instead in firebase functions
        name_lower: form.name.toLowerCase(),
        dateAdded: new Date().getTime(),
        image: imageFile?.image?.file || product.imageUrl,
        imageCollection: imageFile.imageCollection
      });
    } else {
      // eslint-disable-next-line no-alert
      alert('Product thumbnail image is required.');
    }
  };

  return (
    <div>
      <Formik
        initialValues={initFormikValues}
        validateOnChange
        validationSchema={FormSchema}
        onSubmit={onSubmitForm}
      >
        {({ values, setValues }) => (
          <Form className="product-form">
            <div className="product-form-inputs">
              <div className="d-flex">
                <div className="product-form-field">
                  <Field
                    disabled={isLoading}
                    name="name"
                    type="text"
                    label="* Nome bar/negozio"
                    style={{ textTransform: 'capitalize' }}
                    component={CustomInput}
                  />
                </div>
                &nbsp;
                <div className="product-form-field">
                  <Field
                    
                    name="brand"
                    iid="text"
                    label="* Location"
                    style={{ textTransform: 'capitalize' }}
                    component={CustomInput}
                    placeholder=""
                    
                  />
                </div>
              </div>
              <div className="product-form-field">
                <Field
                  disabled={isLoading}
                  name="description"
                  id="description"
                  rows={3}
                  label="* Product Description"
                  component={CustomTextarea}
                />
              </div>

              <div className="product-form-field">
                  <Field
                    
                    name="orariolunedi"
                    iid="text"
                    label="* Orario Lunedì"
                    style={{ textTransform: 'capitalize' }}
                    component={CustomInput}
                    placeholder=""
                    
                  />
                </div>

                <div className="product-form-field">
                  <Field
                    
                    name="orariomartedi"
                    iid="text"
                    label="* Orario martedi"
                    style={{ textTransform: 'capitalize' }}
                    component={CustomInput}
                    placeholder=""
                    
                  />
                </div>

                <div className="product-form-field">
                  <Field
                    
                    name="orariomercoledi"
                    iid="text"
                    label="* Orario Mercoledi"
                    style={{ textTransform: 'capitalize' }}
                    component={CustomInput}
                    placeholder=""
                    
                  />
                </div>

                <div className="product-form-field">
                  <Field
                    
                    name="orariogiovedi"
                    iid="text"
                    label="* Orario Giovedi"
                    style={{ textTransform: 'capitalize' }}
                    component={CustomInput}
                    placeholder=""
                    
                  />
                </div>

                <div className="product-form-field">
                  <Field
                    
                    name="orariovenerdi"
                    iid="text"
                    label="* Orario Venerdi"
                    style={{ textTransform: 'capitalize' }}
                    component={CustomInput}
                    placeholder=""
                    
                  />
                </div>

                <div className="product-form-field">
                  <Field
                    
                    name="orariosabato"
                    iid="text"
                    label="* Orario Sabato"
                    style={{ textTransform: 'capitalize' }}
                    component={CustomInput}
                    placeholder=""
                    
                  />
                </div>

                <div className="product-form-field">
                  <Field
                    
                    name="orariodomenica"
                    iid="text"
                    label="* Orario Domenica"
                    style={{ textTransform: 'capitalize' }}
                    component={CustomInput}
                    placeholder=""
                    
                  />
                </div>

                

              <div className="d-flex">
                <div className="product-form-field">
                  <Field
                    disabled={isLoading}
                    name="price"
                    id="price"
                    type="number"
                    label="* Price"
                    component={CustomInput}
                  />
                </div>
                &nbsp;
                
              </div>
              <div className="d-flex">
              
                &nbsp;
               
               
              </div>
              
              <div className="product-form-field">
                <span className="d-block padding-s">Image Collection</span>
                {!isFileLoading && (
                  <label htmlFor="product-input-file-collection">
                    <input
                      disabled={isLoading}
                      hidden
                      id="product-input-file-collection"
                      multiple
                      onChange={(e) => onFileChange(e, { name: 'imageCollection', type: 'multiple' })}
                      readOnly={isLoading}
                      type="file"
                    />
                    Choose Images
                  </label>
                )}
              </div>
              <div className="product-form-collection">
                <>
                  {imageFile.imageCollection.length >= 1 && (
                    imageFile.imageCollection.map((image) => (
                      <div
                        className="product-form-collection-image"
                        key={image.id}
                      >
                        <ImageLoader
                          alt=""
                          src={image.url}
                        />
                        <button
                          className="product-form-delete-image"
                          onClick={() => removeImage({ id: image.id, name: 'imageCollection' })}
                          title="Delete Image"
                          type="button"
                        >
                          <i className="fa fa-times-circle" />
                        </button>
                      </div>
                    ))
                  )}
                </>
              </div>
              <br />
              <div className="d-flex">
                <div className="product-form-field">
                  <input
                    checked={values.isFeatured}
                    className=""
                    id="featured"
                    onChange={(e) => setValues({ ...values, isFeatured: e.target.checked })}
                    type="checkbox"
                  />
                  <label htmlFor="featured">
                    <h5 className="d-flex-grow-1 margin-0">
                      &nbsp; Add to Featured &nbsp;
                    </h5>
                  </label>
                </div>
                <div className="product-form-field">
                  <input
                    checked={values.isRecommended}
                    className=""
                    id="recommended"
                    onChange={(e) => setValues({ ...values, isRecommended: e.target.checked })}
                    type="checkbox"
                  />
                  <label htmlFor="recommended">
                    <h5 className="d-flex-grow-1 margin-0">
                      &nbsp; Add to Recommended &nbsp;
                    </h5>
                  </label>
                </div>
              </div>
              <br />
              <br />
              <br />
              <div className="product-form-field product-form-submit">
                <button
                  className="button"
                  disabled={isLoading}
                  type="submit"
                >
                  {isLoading ? <LoadingOutlined /> : <CheckOutlined />}
                  &nbsp;
                  {isLoading ? 'Saving Product' : 'Save Product'}
                </button>
              </div>
            </div>
            {/* ----THUBMNAIL ---- */}
            <div className="product-form-file">
              <div className="product-form-field">
                <span className="d-block padding-s">* Thumbnail</span>
                {!isFileLoading && (
                  <label htmlFor="product-input-file">
                    <input
                      disabled={isLoading}
                      hidden
                      id="product-input-file"
                      onChange={(e) => onFileChange(e, { name: 'image', type: 'single' })}
                      readOnly={isLoading}
                      type="file"
                    />
                    Choose Image
                  </label>
                )}
              </div>
              <div className="product-form-image-wrapper">
                {(imageFile.image.url || product.image) && (
                  <ImageLoader
                    alt=""
                    className="product-form-image-preview"
                    src={imageFile.image.url || product.image}
                  />
                )}
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

ProductForm.propTypes = {
  product: PropType.shape({
    name: PropType.string,
    brand: PropType.string,
    price: PropType.number,
    orariolunedi: PropType.string,
    orariomartedi: PropType.string,
    orariomercoledi: PropType.string,
    orariogiovedi: PropType.string,
    orariovenerdi: PropType.string,
    orariosabato: PropType.string,
    orariodomenica: PropType.string,
    description: PropType.string,
    
    
    imageCollection: PropType.arrayOf(PropType.object),
    
    image: PropType.string,
    
    isFeatured: PropType.bool,
    isRecommended: PropType.bool,
    
  }).isRequired,
  onSubmit: PropType.func.isRequired,
  isLoading: PropType.bool.isRequired
};

export default ProductForm;
