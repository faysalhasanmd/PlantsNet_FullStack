import Card from "./Card";
import Container from "../Shared/Container";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../Shared/LoadingSpinner";

const Plants = () => {
  const { data: plant, isLoading } = useQuery({
    queryKey: ["plants"],
    queryFn: async () => {
      const res = await axios("http://localhost:3000/plants");
      return res.data;
    },
  });

  console.log(plant);

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <Container>
      {plant && plant.length > 0 ? (
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {plant.map((singlePlant) => (
            <Card key={singlePlant._id} singlePlant={singlePlant}></Card>
          ))}
        </div>
      ) : null}
    </Container>
  );
};

export default Plants;
