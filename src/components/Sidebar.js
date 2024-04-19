import React from "react";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
function Sidebar(props) {
  return (
    <div className="h-100">
      <Stack gap={3}>
        {props.categories && props.categories.map((category) => {
          return <Button className="p-2" variant="primary">
            {category.category_name}
          </Button>;
        })}
      </Stack>
    </div>
  );
}

export default Sidebar;
