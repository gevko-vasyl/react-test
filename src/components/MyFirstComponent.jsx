import MySecondComponent from './MySecondComponent';
import PropTypes from 'prop-types';

const MyFirstComponent = props => {
  return (
    <div className='test-component'>
      <h2>Test Component</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consecteturdelectus quibusdam
        minima voluptatibus at, quo repellendus dolor nemodoloribus ratione!
      </p>
      <p>user: {props.asdas.name}</p>
      <p>x:{props.x}</p>

      <div>heloo</div>
      <MySecondComponent user={props.asdas} />
    </div>
  );
}

MyFirstComponent.defaultProps = {
  x: 100,
}

MyFirstComponent.propTypes = {
  x: PropTypes.number,
};

export default MyFirstComponent;
