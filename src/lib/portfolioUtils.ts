import fs from 'fs';
import path from 'path';

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  featured: boolean;
}

export function getPortfolioItems(): PortfolioItem[] {
  const imagesDir = path.join(process.cwd(), 'public', 'images');
  const items: PortfolioItem[] = [];

  // Define allowed categories to ensure we only read from specific folders
  const categories = [
    'mehndi',
    'rangoli',
    'paintings',
    'sketches',
    'crafts',
    'gifts',
    'dresses',
    'stitching',
    'home-decor',
    'custom-orders'
  ];

  categories.forEach((category) => {
    const categoryPath = path.join(imagesDir, category);
    
    if (fs.existsSync(categoryPath)) {
      const files = fs.readdirSync(categoryPath);
      
      files.forEach((file, index) => {
        // Only process image files
        if (/\.(jpg|jpeg|png|webp|gif)$/i.test(file)) {
          // Use filename without extension as base for ID to keep it consistent
          const nameWithoutExt = path.parse(file).name;
          const id = `${category}-${nameWithoutExt}-${index}`;
          const imagePath = `/images/${category}/${file}`;
          
          // Generate title from filename (e.g., "bridal-mehndi-01.jpg" -> "Bridal Mehndi 01")
          const title = nameWithoutExt
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
            
          const description = `${title} - Beautiful ${category.replace('-', ' ')} artwork by Triveni Art House.`;
          
          const featured = file.toLowerCase().includes('featured');
          
          items.push({
            id,
            title,
            category,
            image: imagePath,
            description,
            featured
          });
        }
      });
    }
  });

  return items;
}
