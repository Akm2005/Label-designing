import Projects from './Projects';
import Designs from './Designs';

const Content = ({ selectedSection }) => {

  if (!selectedSection) return null;

  return (
    <div className="content-container fixed top-10 left-20 bg-[#6C6C6C] p-6 w-1/5 h-screen shadow-md">
      {(() => {
        switch(selectedSection) {
          case 'project':
            return <Projects />;
          case 'design':
            return <Designs />;
          default:
            return null;
        }
      })()}
    </div>
  );
};

export default Content;
