const image = require.context('./images', true, /\.png$/)


const seratocomponents = {
  inputs: [
    {
      id: 1,
      name: '1/4 inch RCA Input1',
      src: image('./rca-input-left.png'),
    },
    {
      id: 2,
      name: '1/4 inch RCA Input2',
      src: image('./rca-input-right.png'),
    },
    {
      id: 3,
      name: 'USB Input',
      src: image('./usb-input.png'),
    },
    {
      id: 4,
      name: 'XLR Input',
      src: image('./XLR-input.png'),
    },
    {
      id: 5,
      name: '1/8 inch Input',
      src: image('./1-8-input.png'),
    },
  ],
  outputs: [
    {
      id: 6,
      name: '1/4 inch RCA Output1',
      src: image('./rca-input-left.png'),
    },
    {
      id: 7,
      name: '1/4 inch RCA Output2',
      src: image('./rca-input-right.png'),
    },
    {
      id: 8,
      name: 'XLR Output',
      src: image('./XLR-output.png'),
    },
    {
      id: 9,
      name: '1/8 Output',
      src: image('./1-8-input.png'),
    },
  ],
}

export default seratocomponents;
