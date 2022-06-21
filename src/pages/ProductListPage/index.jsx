import React, { useState } from "react";
import { InputNumber, Button, Form, Select } from "antd";

function goiAPI() {
  console.log("Gọi API");
}

const ProductListPage = ({ name, setName }) => {

  const [pin2, setPin2] = useState(0);
  const [pin3, setPin3] = useState(0);

  goiAPI();



  return (
    <div>
      <Button onClick={() => setName("Điện thoại")}>
        Set Name
      </Button>
      sản phẩm - {name}
      <div>
      <Form.Item label="Brand" name="brand">
            <Select>
              <Select.Option value="apple">
                Apple
              </Select.Option>
              <Select.Option value="samsung">
                Samsung
              </Select.Option>
              <Select.Option value="xiaomi">
                Xiaomi
              </Select.Option>
            </Select>
      </Form.Item>
      <Form.Item label="amount" name="amount">
      <InputNumber onChange={(value) => setPin2(value)} />
          </Form.Item>

        <Form.Item label="Price" name="price">
        <InputNumber onChange={(value) => setPin3(value)} />
          </Form.Item>

      </div>
    </div>
  );
};

export default ProductListPage;
