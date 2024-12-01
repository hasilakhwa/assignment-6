import Card from "../components/Card";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card title="Card 1" description="Yeh pehla card hai." />
        <Card title="Card 2" description="Yeh doosra card hai." />
        <Card title="Card 3" description="Yeh teesra card hai." />
      </div>
    </div>
  );
}
