import './styles.scss';

const ValueBox = ({value}: Props) => (
    <div className="value-box">{value?.toUpperCase()}</div>
);

interface Props {
  value: string;
}

export default ValueBox;
