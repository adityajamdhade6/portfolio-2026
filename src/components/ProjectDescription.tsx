interface ProjectDescriptionProps {
  sectionTitle: string;
  description: string;
}

const ProjectDescription = ({ 
  sectionTitle, 
  description 
}: ProjectDescriptionProps) => {
  return (
    <div className="space-y-5">
      <p className="meta-label">{sectionTitle}</p>
      
      <p className="text-sm leading-[1.8] text-muted-foreground font-light tracking-wide">
        {description}
      </p>
    </div>
  );
};

export default ProjectDescription;
