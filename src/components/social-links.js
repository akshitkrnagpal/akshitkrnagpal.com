import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import createPersistedState from 'use-persisted-state';

const SocialLink = ({ innerRef, link, icon, label, ...other }) => (
  <a
    className="w-8 h-8"
    ref={innerRef}
    aria-label={label}
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    {...other}
  >
    <FontAwesomeIcon icon={['fab', icon]} className="text-2xl" fixedWidth />
  </a>
);

const usePersistedState = createPersistedState('socials');

const SocialLinks = ({ social }) => {
  const [socials, setSocials] = usePersistedState(social);

  const onDragEnd = ({ source, destination }) => {
    if (!destination) return;

    setSocials((socials) => {
      const [dragged] = socials.splice(source.index, 1);
      socials.splice(destination.index, 0, dragged);
      return [...socials];
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="socials" direction="horizontal">
        {({ innerRef, droppableProps, placeholder }) => (
          <div
            ref={innerRef}
            {...droppableProps}
            className="flex space-x-4 justify-center py-2"
          >
            {socials.map(({ website, url }, index) => (
              <Draggable key={website} draggableId={website} index={index}>
                {({ innerRef, draggableProps, dragHandleProps }) => (
                  <SocialLink
                    innerRef={innerRef}
                    {...draggableProps}
                    {...dragHandleProps}
                    link={url}
                    label={website}
                    icon={website}
                  />
                )}
              </Draggable>
            ))}
            {placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default SocialLinks;
