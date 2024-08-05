import Slider from "@mui/material/Slider";
export function SliderDisabled() {
    return (
      <div>
        <Slider
          style={{
            color: "",
          }}
          defaultValue={20}
          valueLabelDisplay="on"
          step={10}
          marks
          min={10}
          max={110}
          disabled
        />
      </div>
    );
  }
