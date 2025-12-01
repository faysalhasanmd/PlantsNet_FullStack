import Container from "../../components/Shared/Container";
import Heading from "../../components/Shared/Heading";
import Button from "../../components/Shared/Button/Button";
import PurchaseModal from "../../components/Modal/PurchaseModal";
import { useState } from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";

const PlantDetails = () => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const {
    data: plant = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["plant", id],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:3000/plants/${id}`);
      return res.data;
    },
    // enabled: !!id,
  });

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  const {
    image,
    name,
    price,
    category,
    description,
    quantity,
    seller = {},
  } = plant;

  return (
    <Container>
      <div className="mx-auto flex flex-col lg:flex-row justify-between w-full gap-12">
        <div className="flex flex-col gap-6 flex-1">
          <div className="w-full overflow-hidden rounded-xl">
            <img
              className="object-cover w-full"
              src={image || "https://via.placeholder.com/600x400"}
              alt={name}
            />
          </div>
        </div>

        <div className="flex-1">
          <Heading title={name} subtitle={`Category: ${category}`} />

          <hr className="my-6" />
          <div className="text-lg font-light text-neutral-500">
            {description}
          </div>
          <hr className="my-6" />

          <div className="text-xl font-semibold flex items-center gap-2">
            <div>Seller: {seller.name}</div>
            {seller.image ? (
              <img
                className="rounded-full h-8 w-8"
                src={seller.image}
                referrerPolicy="no-refferrer"
                alt={seller.name}
              />
            ) : null}
          </div>

          <hr className="my-6" />
          <p className="font-light text-neutral-500">Quantity: {quantity}</p>
          <hr className="my-6" />

          <div className="flex justify-between items-center">
            <p className="font-bold text-3xl text-gray-500">Price: {price}$</p>
            <Button onClick={() => setIsOpen(true)} label="Purchase" />
          </div>

          <PurchaseModal
            plant={plant}
            isOpen={isOpen}
            closeModal={() => setIsOpen(false)}
          />
        </div>
      </div>
    </Container>
  );
};

export default PlantDetails;
