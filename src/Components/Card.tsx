interface CardProps {
  topSection: React.ReactNode;
  bottomSection: React.ReactNode;
}

const Card = ({ topSection, bottomSection }: CardProps) => {
  return (
    <div className="bg-[#0d0d0d] border border-gray-800 rounded-xl p-5 mb-4">
      {topSection}
      <div className="border-t border-gray-800 my-4"></div>
      {bottomSection}
    </div>
  );
};

export default Card;
