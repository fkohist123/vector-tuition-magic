
import React from "react";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a 
        className="flex items-center bg-[#25D366] text-white rounded-full px-6 py-3 shadow-lg hover:bg-[#128C7E] transition-colors group relative"
        data-action="open" 
        data-phone="447951453507" 
        data-message="Hello!" 
        role="button" 
        tabIndex={0} 
        target="_blank"
        href="https://wa.me/447951453507"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
      >
        <i className="flex items-center justify-center h-10 w-10">
          <svg viewBox="0 0 32 32" className="h-6 w-6 fill-current">
            <path d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-.143-.175-.143-.1 0-.22.03-.3.09-.14.257-.585 1.076-.585 1.638 0 .13.058.254.092.38.16.558.887 2.22 2.07 3.405 1.248 1.248 2.52 1.764 3.727 2.022.193.033.39.05.563.05.516 0 1.58-.256 1.58-1.37 0-.516-.46-.888-.648-.936-.365-.183-.57-.183-.86-.183zm1.613-4.823c.647 0 1.204.22 1.633.603l-1.09 1.096c-.217-.193-.516-.3-.816-.3-.816 0-1.490.67-1.5 1.5 0 .29.098.58.29.8l-1.096 1.093c-.382-.43-.603-.997-.603-1.64 0-1.33 1.087-2.42 2.422-2.42v-.04zm4.02-4.765C22.358 5.208 19.788 4 16.985 4c-5.944 0-10.766 4.855-10.766 10.825 0 1.965.526 3.84 1.524 5.47L6 27.176l6.95-1.847c1.58.866 3.36 1.32 5.186 1.32 5.945 0 10.767-4.856 10.767-10.826 0-2.913-1.183-5.513-3.16-7.4l-.01.01zm-9.76 18.256c-1.644 0-3.248-.437-4.667-1.26l-.33-.195-3.466.91.926-3.41-.214-.35c-.868-1.38-1.328-2.98-1.328-4.646 0-4.942 3.993-8.97 8.894-8.97 2.374 0 4.605.94 6.292 2.647 1.69 1.717 2.616 4 2.604 6.426.01 4.95-4.02 8.97-8.903 8.97l.022-.03z" />
          </svg>
        </i>
        <i className="qlwapp-close hidden group-hover:block absolute right-4 text-xl font-medium" data-action="close">×</i>
        <span className="qlwapp-text ml-2">How can I help you?</span>
      </a>
    </div>
  );
};

export default WhatsAppButton;
