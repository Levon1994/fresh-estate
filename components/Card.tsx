interface CardProps {
  title: string;
  description: string;
  price: string | number;
  image: string;
  id: string;
}

export const Card = ({ title, price, description, image, id }: CardProps) => {
  return (
    
      <div class="group relative">
        <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
          <a href={`/product/${id}`}>
            <img class="h-full w-full object-cover object-center lg:h-full lg:w-full" src={image} alt={title} />
          </a>
        </div>
        <div class="mt-4 flex justify-between">
          <div>
            <h3 class="text-sm text-gray-700">
              <a href={`/product/${id}`}>
                <span aria-hidden="true" class="absolute inset-0"></span>
                {title.slice(0, 20)}
              </a>
            </h3>
            <p class="mt-1 text-sm text-gray-500">{description.slice(0, 58)}...</p>
          </div>
          <p class="text-sm font-medium text-gray-900">${price}</p>
        </div>
      </div>
  );
};