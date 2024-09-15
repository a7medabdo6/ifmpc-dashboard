import React, { Fragment, useRef, useEffect, useState } from "react";
import { Breadcrumb, Button, Col, Row, Form, Spinner } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import { useCreateContactUs } from "../../../../Api/ContactUs";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markir from "../../../../assets/img/markir.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// تعريف الأيقونة المخصصة
const customIcon = new L.Icon({
  iconUrl: markir, // المسار إلى صورة الأيقونة
  iconSize: [32, 32], // حجم الأيقونة
  iconAnchor: [16, 32], // نقطة التثبيت على الأيقونة
  popupAnchor: [0, -32], // نقطة فتح النوافذ المنبثقة بالنسبة للأيقونة
});

const schema = yup.object().shape({
  location_en: yup.string().required(),
  location_ar: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  map_link: yup.string().required(),
  latitude: yup.number().required(),
  longitude: yup.number().required(),
});

const AddContactUs = () => {
  const { mutate, data } = useCreateContactUs();
  const mapRef = useRef();
  const provider = new OpenStreetMapProvider();
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state
  const [copied, setCopied] = useState(false);

  // وظيفة للحصول على تفاصيل الموقع بما في ذلك اسم البلد
  const getLocationDetails = async (lat, lng) => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&addressdetails=1`
    );
    const data = await response.json();
    return data;
  };

  // تحديث حقول النموذج باستخدام الموقع المحدد
  const updateFormFields = async (lat, lng, setFieldValue) => {
    const result = await getLocationDetails(lat, lng);
    if (result && result.address) {
      const { address } = result;
      const location = address.road
        ? `${address.road}, ${address.city}, ${address.country}`
        : address.country;

      setFieldValue("location", location);
      setFieldValue("location_en", address.country); // استخدم اسم البلد باللغة الإنجليزية
      setFieldValue("location_ar", address.country); // استخدم اسم البلد بالعربية إذا كان متوفرًا

      setFieldValue("latitude", lat);
      setFieldValue("longitude", lng);
      setFieldValue(
        "map_link",
        `https://www.openstreetmap.org/#map=13/${lat}/${lng}`
      );
    }
  };

  // تهيئة تحكم البحث
  const initializeSearchControl = (setFieldValue) => {
    const searchControl = new GeoSearchControl({
      provider,
      style: "button",
      marker: {
        icon: customIcon, // استخدام الأيقونة المخصصة
        draggable: true,
      },
    });

    mapRef.current.leafletElement.addControl(searchControl);

    mapRef.current.leafletElement.on("geosearch/showlocation", (event) => {
      const { location } = event;
      const { lat, lng } = location;
      updateFormFields(lat, lng, setFieldValue);
    });
  };
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    if (data) {
      toast.success("This item has been successfully Created.");

      // تأخير الانتقال لمدة 2 ثانية (2000 مللي ثانية)
      navigate("/pages/contactus/");
    }
  }, [data, navigate]);
  return (
    <Fragment>
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Create ContactUs</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#"> Pages </Breadcrumb.Item>
            <Breadcrumb.Item active>Create ContactUs</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>

      <div className="col-xl-12 col-lg-12 col-md-12">
        <div className="card custom-card">
          <div className="card-body">
            <Formik
              validationSchema={schema}
              onSubmit={(data) => {
                setIsSubmitting(true);
                mutate(data, {
                  onSuccess: () => {
                    setIsSubmitting(false); // Reset submitting state
                  },
                  onError: (error) => {
                    toast.error("Error submitting data:", error.message);
                    setIsSubmitting(false); // Reset submitting state
                  },
                });
              }}
              initialValues={{
                location_en: "",
                location_ar: "",
                email: "user@example.com",
                phone: "",
                map_link: "",
                latitude: 51.505, // تعيين قيمة افتراضية
                longitude: -0.09, // تعيين قيمة افتراضية
              }}
            >
              {({
                handleSubmit,
                handleChange,
                setFieldValue,
                values,
                touched,
                errors,
              }) => {
                const isFormValid = !Object.values(values).some(
                  (value) => value === "" || value === null
                );
                return (
                  <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                     
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik102"
                        className="position-relative"
                      >
                        <Form.Label>Location (EN)</Form.Label>
                        <Form.Control
                          type="text"
                          name="location_en"
                          value={values.location_en}
                          onChange={handleChange}
                          isValid={touched.location_en && !errors.location_en}
                        />
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik103"
                        className="position-relative"
                      >
                        <Form.Label>Location (AR)</Form.Label>
                        <Form.Control
                          type="text"
                          name="location_ar"
                          value={values.location_ar}
                          onChange={handleChange}
                          isValid={touched.location_ar && !errors.location_ar}
                        />
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormikEmail"
                        className="position-relative"
                      >
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          isValid={touched.email && !errors.email}
                        />
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik104"
                        className="position-relative"
                      >
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                          type="text"
                          name="phone"
                          value={values.phone}
                          onChange={handleChange}
                          isValid={touched.phone && !errors.phone}
                        />
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationFormik105"
                        className="position-relative"
                      >
                        <Form.Label>Map Link</Form.Label>
                        <Form.Control
                          type="text"
                          name="map_link"
                          value={values.map_link}
                          onChange={handleChange}
                          isValid={touched.map_link && !errors.map_link}
                        />
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationFormik106"
                        className="position-relative"
                      >
                        <Form.Label>Latitude</Form.Label>
                        <Form.Control
                          type="text"
                          name="latitude"
                          value={values.latitude}
                          onChange={handleChange}
                          isValid={touched.latitude && !errors.latitude}
                        />
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationFormik107"
                        className="position-relative"
                      >
                        <Form.Label>Longitude</Form.Label>
                        <Form.Control
                          type="text"
                          name="longitude"
                          value={values.longitude}
                          onChange={handleChange}
                          isValid={touched.longitude && !errors.longitude}
                        />
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Col md="12">
                        <MapContainer
                          center={[values.latitude, values.longitude]}
                          zoom={13}
                          style={{ height: "400px", width: "100%" }}
                          whenCreated={(map) => {
                            mapRef.current = map;
                            initializeSearchControl(setFieldValue);
                          }}
                        >
                          <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                          />
                          <Marker
                            position={[values.latitude, values.longitude]}
                            icon={customIcon} // استخدام الأيقونة المخصصة
                            draggable={true}
                            eventHandlers={{
                              dragend: (event) => {
                                const marker = event.target;
                                const position = marker.getLatLng();
                                setFieldValue("latitude", position.lat);
                                setFieldValue("longitude", position.lng);
                                updateFormFields(
                                  position.lat,
                                  position.lng,
                                  setFieldValue
                                );
                              },
                            }}
                          ></Marker>
                        </MapContainer>
                      </Col>
                    </Row>
                    <Button
                      type="submit"
                      disabled={isSubmitting || !isFormValid}
                    >
                      {isSubmitting ? (
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                      ) : (
                        "Submit"
                      )}
                    </Button>{" "}
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AddContactUs;
