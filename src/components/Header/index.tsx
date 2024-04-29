import Typography from '../Typography';

interface Props {
  title: string;
}

const Header = ({title}: Props) => {
  return <Typography variant="heading5">{title}</Typography>;
};

export default Header;
