import React, { Fragment } from "react";
import { Breadcrumb, Button, Col, Row, Card } from "react-bootstrap";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import StarRateIcon from "@material-ui/icons/StarRate";
import Stack from "@mui/material/Stack";
import StarsIcon from "@material-ui/icons/Stars";
import { styled } from "@mui/material/styles";
const Ratings = () => {
  const StyledRating = styled(Rating)({ color: "#F1C40F" });
  const StyledStarRating = styled(Rating)({ color: "#E74C3C" });
  const StyledheartRating = styled(Rating)({ color: "#E74C3C" });
  const onChange = (value) => {
    window.alert(`rating is ${value}`);
  };
  return (
    <Fragment>
      {/* <!-- Page Header --> */}
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">Rating</h2>
          <Breadcrumb >
            <Breadcrumb.Item href="#">Advanced UI</Breadcrumb.Item>
            <Breadcrumb.Item active > Rating</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="d-flex">
          <div className="justify-content-center">
            <Button variant="white"
              type="button"
              className="btn-icon-text my-2 me-2"
            >
              <i className="fe fe-download me-2"></i> Import
            </Button>
            <Button variant="white"
              type="button"
              className="btn-icon-text my-2 me-2"
            >
              <i className="fe fe-filter me-2"></i> Filter
            </Button>
            <Button variant="primary" type="button" className=" my-2 btn-icon-text">
              <i className="fe fe-download-cloud me-2"></i> Download Report
            </Button>
          </div>
        </div>
      </div>
      {/* <!-- End Page Header --> */}

      {/* <!-- Row --> */}
      <Row className="row-sm">
        <Col sm={6} md={6}>
          <Card className="custom-card">
            <Card.Header>
              <h6 className="card-title">
                <label className="main-content-label"> Star Rating</label>
              </h6>
            </Card.Header>
            <Card.Body>
              <div className="static-rate text-center fs-30">
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating name="no-value" size="large" value={3} max={5} />
                </Box>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={6}>
          <Card className="custom-card">
            <Card.Header>
              <h6 className="card-title">
                <label className="main-content-label"> Basic Rating</label>
              </h6>
            </Card.Header>
            <Card.Body>
              <div className=" text-center fs-30">
                <Stack spacing={1} className="rating-stars block my-rating ratingcenter">
                  <Rating
                    name="half-rating"
                    value={3}
                    precision={0.5}
                    size="large"
                    icon={<StarRateIcon fontSize="inherit" />}
                    emptyIcon={<StarRateIcon fontSize="inherit" />}
                  />
                </Stack>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} md={6}>
          <Card className="custom-card">
            <Card.Header>
              <h6 className="card-title">
                <label className="main-content-label"> Hover Feedback Rating</label>
              </h6>
            </Card.Header>
            <Card.Body>
              <div className="box box-large box-example-horizontal">
                <div className="box-body text-center">
                  <Stack spacing={1} className="rating-stars block my-rating-6 ratingcenter">
                    <Rating
                      name="half-rating"
                      value={3}
                      precision={0.5}
                      size="large"
                      onChange={onChange}
                      icon={<StarRateIcon fontSize="inherit" />}
                      emptyIcon={<StarRateIcon fontSize="inherit" />}
                    />
                  </Stack>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={6}>
          <Card className="custom-card">
            <Card.Header>
              <h6 className="card-title">
                <label className="main-content-label">Gradients Rating</label>
              </h6>
            </Card.Header>
            <Card.Body>
              <div className="box  box-example-1to10">
                <div className="box box-example-square">
                  <div className="box-body text-center">
                    <Stack spacing={1} className="rating-stars block my-rating-5 ratingcenter">
                      <Rating
                        name="half-rating"
                        value={3}
                        precision={0.5}
                        size="large"
                        icon={<StarRateIcon fontSize="inherit" />}
                        emptyIcon={<StarRateIcon fontSize="inherit" />}
                      />
                    </Stack>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={6}>
          <Card className="custom-card">
            <Card.Header>
              <h6 className="card-title">
                <label className="main-content-label"> Rounded Star Rating</label>
              </h6>
            </Card.Header>
            <Card.Body>
              <div className="box  box-example-1to10">
                <div className="box box-example-square">
                  <div className="box-body text-center">
                    <Stack spacing={1} className="rating-stars  block my-rating-4 ratingcenter">
                      <Rating
                        name="half-rating"
                        value={3}
                        precision={0.5}
                        size="large"
                        icon={<StarsIcon fontSize="inherit" />}
                        emptyIcon={<StarsIcon fontSize="inherit" />}
                      />
                    </Stack>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={6}>
          <Card className="custom-card">
            <Card.Header>
              <h6 className="card-title">
                <label className="main-content-label"> Heart rating</label>
              </h6>
            </Card.Header>
            <Card.Body>
              <div className="box box-example-movie">
                <div className="box-body  text-center fs-30">
                  <Box
                    sx={{
                      "& > legend": { mt: 2 },
                    }}
                  >
                    <StyledRating
                      name="customized-color"
                      defaultValue={2}
                      icon={<FavoriteIcon fontSize="inherit" />}
                      emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                    />
                  </Box>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}

      {/* <!-- Row --> */}
      <Row className="row-sm">


        <Col sm={6} md={6}>
          <Card className="custom-card">
            <Card.Header>
              <h6 className="card-title">
                <label className="main-content-label"> Multi Heart rating</label>
              </h6>
            </Card.Header>
            <Card.Body>
              <div className="box  box-example-1to10">
                <div className="box box-example-square">
                  <div className="box-body text-center">
                    <Box
                      sx={{
                        "& > legend": { mt: 2 },
                      }}
                    >
                      <StyledheartRating
                        name="no-value"
                        size="large"
                        value={3}
                        max={10}
                        icon={<FavoriteIcon fontSize="inherit" />}
                        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                      />
                    </Box>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={6}>
          <Card className="custom-card">
            <Card.Header>
              <h6 className="card-title">
                <label className="main-content-label"> Rating precision</label>
              </h6>
            </Card.Header>
            <Card.Body>
              <div className="box box-example-pill">
                <div className="box-body text-center">
                  <Box
                    sx={{
                      "& > legend": { mt: 2 },
                    }}
                  >
                    <StyledStarRating name="no-value" size="large" value={3} max={10} />
                  </Box>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={6}>
          <Card className="custom-card">
            <Card.Header>
              <h6 className="card-title">
                <label className="main-content-label"> Thumbs-up Rating</label>
              </h6>
            </Card.Header>
            <Card.Body>
              <div className="box  box-example-1to10">
                <div className="box box-example-square">
                  <div className="box-body text-center">
                    <Box
                      sx={{
                        "& > legend": { mt: 2 },
                      }}
                    >
                      <Rating
                        name="no-value"
                        size="large"
                        value={3}
                        max={5}
                        icon={<ThumbUpIcon fontSize="inherit" />}
                        emptyIcon={<ThumbUpIcon fontSize="inherit" />}
                      />
                    </Box>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

      </Row>

      {/* <!-- End Row --> */}
    </Fragment>
  );
}

Ratings.propTypes = {};

Ratings.defaultProps = {};

export default Ratings;
