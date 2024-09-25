import { useEffect, useState } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import './resend.scss';

interface Props {
  onResend: () => void;
  resetIndex: number;
  resendLoading?: boolean;
  initialMinute?: number;
  initialSeconds?: number;
}

export const CustomTimer = ({
  onResend,
  resendLoading,
  resetIndex,
  initialMinute = 1,
  initialSeconds = 59,
}: Props) => {
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  const isActive = minutes > 0 || seconds > 0 || resendLoading;

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> = setInterval(() => {
      // Your repeated action here
    }, 1000);

    if (minutes > 0 || seconds > 0) {
      intervalId = setInterval(() => {
        if (seconds > 0) {
          setSeconds((seconds) => seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(intervalId);
          } else {
            setMinutes((minutes) => minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [seconds, minutes]);

  const reset = () => {
    setMinutes(initialMinute);
    setSeconds(initialSeconds);
  };

  useEffect(() => {
    if (resetIndex > 0) reset();
  }, [resetIndex]);

  const styles = {
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: 8,
      width: 296,
    },
    text: {
      fontWeight: '500',
    },
    timer: {
      fontWeight: '500',
    },
  };

  return (
    <div className="resend">
      <div
        onClick={onResend}
        style={
          !isActive
            ? { pointerEvents: 'initial', cursor: 'pointer', opacity: 1 }
            : { pointerEvents: 'none', opacity: 0.5 }
        }
      >
        <p>Smsni qayta yuborish</p>
      </div>
      {resendLoading && <LoadingOutlined />}
      <p style={styles.timer}>
        {`${minutes.toString().padStart(2, '0')}:${seconds
          .toString()
          .padStart(2, '0')}`}
      </p>
    </div>
  );
};

// Usage:
// <CustomTimer initialMinute={1} initialSeconds={59} />
