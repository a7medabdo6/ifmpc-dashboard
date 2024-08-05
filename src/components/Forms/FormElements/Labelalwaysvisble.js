import Slider from "@mui/material/Slider";
export function Labelalwaysvisible() {
    const getText = (value) => `${value}`;
    const coustomMarks = [
      {
        label: "100",
        value: 100,
      },
  
      {
        label: "1000",
        value: 1000,
      },
    ];
    return (
      <div>
        <Slider
          style={{
            color: "#6259ca",
          }}
          min={100}
          max={1000}
          defaultValue={550}
          marks={coustomMarks}
          getAriaValueText={getText}
          valueLabelDisplay="on"
        />
      </div>
    );
  }