import checkIcon from './assets/check.svg';
import errorIcon from './assets/error.svg';
import infoIcon from './assets/info.svg';
import warningIcon from './assets/warning.svg';


const id = Math.floor((Math.random() * 101) + 1) ;
export const TOAST_PROPERTIES = [
  {
    id: id,
    title: 'Success',
    description: 'This is a success toast component',
    backgroundColor: '#5cb85c',
    icon: checkIcon
  },
  {
    id: id,
    title: 'Danger',
    description: 'This is an error toast component',
    backgroundColor: '#d9534f',
    icon: errorIcon
  },
  {
    id: id,
    title: 'Info',
    description: 'This is an info toast component',
    backgroundColor: '#5bc0de',
    icon: infoIcon
  },
  {
    id: id,
    title: 'Warning',
    description: 'This is a warning toast component',
    backgroundColor: '#f0ad4e',
    icon: warningIcon
  }
];

export const BUTTON_PROPS = [
  {
    id: 1,
    type: 'success',
    className: 'success',
    label: 'Success'
  },
  {
    id: 2,
    type: 'danger',
    className: 'danger',
    label: 'Danger'
  },
  {
    id: 3,
    type: 'info',
    className: 'info',
    label: 'Info'
  },
  {
    id: 4,
    type: 'warning',
    className: 'warning',
    label: 'Warning'
  },
];