import styles from './FormattedTime.module.scss';

const FormattedTime = ({ time }) => {

  const padTo2Digits = (num) => {
    return num.toString().padStart(2, '0');
  };

  const formatTime = (milliseconds) => {

    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    seconds = seconds % 60;
    minutes = minutes % 60;

    return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(seconds)}.${(milliseconds % 1000).toString().padStart(3, '0')}`;
  };


  return (
    <div className={styles.FormattedTime}>
       {(formatTime(time))}
    </div>
  );

};

export default FormattedTime;