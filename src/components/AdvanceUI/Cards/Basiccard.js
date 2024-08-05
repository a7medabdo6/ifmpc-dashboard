import React, { Fragment } from "react";
import { Card } from 'react-bootstrap';
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
// BASIC CARD FOR CUSTOM
export function Basiccard() {
  const [expanded, setExpanded] = React.useState(true);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })

    (({ theme, expand }) => ({
      transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    }));

  const [show, setShow] = React.useState(true);
  return (
    <Fragment>
      {show ?

        (
          <Card className="custom-card">
            <CardActions className="card-header custom-card-header border-bottom-0 ">
              <h5 className="main-content-label tx-dark my-auto tx-medium mb-0">
                Basic Card
              </h5>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
              <IconButton
                size="small"
                edge="start"
                color="inherit"
                onClick={() => setShow(false)}
                aria-label="close"
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto">
              <div className="card-body">
                Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus
                in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut
                metus varius laoreet
              </div>
              <div className="card-footer">This is Basic card footer</div>
            </Collapse>
          </Card>
        ) : null}
    </Fragment>
  );
}