const CustomOption = ({ children, calories, ...props }) => {
    return (
      <components.Option {...props}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>{children}</div>
          <input
            type="number"
            placeholder="Calorías"
            value={calories}
            onChange={(event) => {
              const newCalories = event.target.value;
              props.setValue(props.data.value, 'calories', newCalories);
            }}
          />
        </div>
      </components.Option>
    );
  };
  