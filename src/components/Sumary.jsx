import { useAuthContext } from '../firebase/auth';

function Sumary() {
  const user = useAuthContext();

  // useEffect(() => {
  //   let unsub = () => {};

  //   async function get() {
  //     unsub = await getTransactions(user.uid, setTransactions, setLoading, {
  //       type,
  //       from,
  //       to,
  //     });
  //   }

  //   if (user) {
  //     get();
  //   }

  //   return () => unsub();
  // }, [user, type, from, to]);

  return <div>Sumary Total expense: Total income:</div>;
}

export default Sumary;
