const image = require.context('./images', true, /\.png$/)


const seratocomponentsLibrary = [
  {
    inputs: [
      {
        id: 0,
        name: '1/4 inch RCA Input1',
        src: image('./rca-input-left.png'),
      },
      {
        id: 1,
        name: '1/4 inch RCA Input2',
        src: image('./rca-input-right.png'),
      },
      {
        id: 2,
        name: 'USB Input',
        src: image('./usb-input.png'),
      },
      {
        id: 3,
        name: 'XLR Input',
        src: image('./XLR-input.png'),
      },
      {
        id: 4,
        name: '1/8 inch Input',
        src: image('./1-8-input.png'),
      },
    ],
  },
  {
    outputs: [
      {
        id: 5,
        name: '1/4 inch RCA Output1',
        src: image('./rca-input-left.png'),
      },
      {
        id: 6,
        name: '1/4 inch RCA Output2',
        src: image('./rca-input-right.png'),
      },
      {
        id: 7,
        name: 'XLR Output',
        src: image('./XLR-output.png'),
      },
      {
        id: 8,
        name: '1/8 Output',
        src: image('./1-8-input.png'),
      },
    ],
  },
  {
    bases: [
      {
        id: 9,
        name: 'Large Black',
        src: image('./base-large-black.png'),
      },
      {
        id: 10,
        name: 'Large White',
        src: image('./base-large-ecru.png'),
      },
      {
        id: 11,
        name: 'Large Red',
        src: image('./base-large-smoke-red.png'),
      },
    ],
  },
  {
    buttons: [
      {
        id: 12,
        name: 'CUE blue',
        src: image('./button-cue-blue.png'),
      },
      {
        id: 13,
        name: 'CUE orange',
        src: image('./button-cue-orange.png'),
      },
      {
        id: 14,
        name: 'PLAY green',
        src: image('./button-play-grey-green.png'),
      },
      {
        id: 15,
        name: 'ROLL light blue',
        src: image('./button-roll-light-blue.png'),
      },
      {
        id: 16,
        name: 'SAMPLER violet',
        src: image('./button-sampler-violet.png'),
      },
      {
        id: 17,
        name: 'SLICER green',
        src: image('./button-slicer-pink.png'),
      },
      {
        id: 18,
        name: 'VINYL BLUE',
        src: image('./button-vinyl-blue.png'),
      },
      {
        id: 19,
        name: 'CUE GREY',
        src: image('./button-cue-grey.png'),
      },
    ],
  },
  {
    controls: [
      {
        id: 20,
        name: 'FILTER black',
        src: image('./control-filter-black.png'),
      },
      {
        id: 21,
        name: 'HI black',
        src: image('./control-hi-dark.png'),
      },
      {
        id: 22,
        name: 'LEVEL black',
        src: image('./control-level-dark.png'),
      },
      {
        id: 23,
        name: 'LOW black',
        src: image('./control-low-dark.png'),
      },
      {
        id: 24,
        name: 'MID black',
        src: image('./control-mid-black.png'),
      },
      {
        id: 25,
        name: 'Control Vinyl',
        src: image('./control-vinyl.png'),
      },
    ],
  },
  {
    pads: [
      {
        id: 26,
        name: 'Pad Blue',
        src: image('./pad-blue-button.png'),
      },
      {
        id: 27,
        name: 'Pad Dark Blue',
        src: image('./pad-dark-blue.png'),
      },
      {
        id: 28,
        name: 'Pad Dark Green',
        src: image('./pad-dark-green.png'),
      },
      {
        id: 29,
        name: 'Pad Dark Pink',
        src: image('./pad-dark-pink.png'),
      },
      {
        id: 30,
        name: 'Pad Dark Red',
        src: image('./pad-dark-red.png'),
      },
      {
        id: 31,
        name: 'Pad green',
        src: image('./pad-green-button.png'),
      },
      {
        id: 32,
        name: 'Pad LightBlue',
        src: image('./pad-lightblue-button.png'),
      },
      {
        id: 33,
        name: 'Pad pink',
        src: image('./pad-pink-button.png'),
      },
      {
        id: 34,
        name: 'Pad Purple',
        src: image('./pad-violet-button.png'),
      },
    ],
  },
  {
    fxTabs: [
      {
        id: 35,
        name: 'FX Tab Dark Blue',
        src: image('./fx-tab-dark-blue.png'),
      },
      {
        id: 36,
        name: 'Media Status',
        src: image('./media-status-blue-dark.png'),
      },
    ],
  },
  {
    vinyls: [
      {
        id: 37,
        name: 'Vinyl blue',
        src: image('./vinyl-blue.png'),
      },
      {
        id: 38,
        name: 'Vinyl full dark',
        src: image('./vinyl-full-dark.png'),
      },
      {
        id: 39,
        name: 'Vinyl grey/green',
        src: image('./vinyl-grey-green.png'),
      },
      {
        id: 40,
        name: 'Vinyl grey',
        src: image('./vinyl-metal-grey.png'),
      },
    ],
  },
  {
    screens: [
      {
        id: 41,
        name: 'Screen Tracklist',
        src: image('./screen-dark.png'),
      },
      {
        id: 42,
        name: 'Screen Equalizer',
        src: image('./screen-equlizer-dark.png'),
      },
    ],
  },
  {
    faders: [
      {
        id: 43,
        name: 'Center Fader',
        src: image('./fader-center-black.png'),
      },
      {
        id: 44,
        name: 'Left/Right Fader',
        src: image('./fader-left-dark.png'),
      },
      {
        id: 45,
        name: 'Tempo Black',
        src: image('./fader-tempo-black.png'),
      },
    ],
  },
]

export default seratocomponentsLibrary;
