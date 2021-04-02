import "../styles/StatsContainer.css";

function StatsContainer({userData}) {

  return <section className="StatsContainer">
  <form>
    <div><b>User: </b>{userData.name}</div>
    <div><b>Username: </b>{userData.username}</div>
    <div><b>Level: </b>{userData.level}</div>
    <div><b>Attack Power: </b>{userData.attackPower}</div>
    <div><b>Total refills: </b>{userData.refill_count}</div>
    <div><b>Refills amount: </b>{userData.refill_amount}</div>
  </form>
  </section>;
}

export default StatsContainer;

// Refill
// Battle数
