import { TailSpin } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <TailSpin
        visible={true}
        height={48}
        width={48}
        color="#00BDD3"
        ariaLabel="tail-spin-loading"
        radius={8}
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
