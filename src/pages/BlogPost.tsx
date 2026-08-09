import { useParams } from 'react-router-dom';
export default function BlogPost() { 
  const { slug } = useParams();
  return <div className="pt-32 p-20 text-center"><h1 className="text-4xl font-heading font-bold">Blog Post: {slug}</h1></div>; 
}
