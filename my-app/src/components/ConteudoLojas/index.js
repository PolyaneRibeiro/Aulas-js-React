export default function ConteudoLojas({ banner, titulo, slogan }) {
  return (
    <div className="card">
        <img src={banner}/>
      <h1>{titulo}</h1>
      <h2>{slogan}</h2>
    </div>
  );
}