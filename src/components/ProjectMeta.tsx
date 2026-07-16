interface MetaItem {
  label: string;
  value: string;
}

interface ProjectMetaProps {
  title: string;
  items: MetaItem[];
  projectNumber: number;
}

const ProjectMeta = ({ title, items, projectNumber }: ProjectMetaProps) => {
  const formattedNumber = projectNumber.toString().padStart(2, '0');
  
  return (
    <div className="space-y-8">
      <div>
        <p className="font-serif text-5xl md:text-6xl text-muted-foreground/30 mb-2">
          {formattedNumber}
        </p>
        <h2 className="font-serif text-xl md:text-2xl tracking-wide">
          {title}
        </h2>
      </div>
      
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className="space-y-1">
            <p className="meta-label">[{item.label}]</p>
            <p className="meta-value">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectMeta;
