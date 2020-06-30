import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { SocialIcon } from '../styled';

const SocialLink = ({ innerRef, link, icon, label, ...other }) => (
  <SocialIcon
    ref={innerRef}
    aria-label={label}
    href={link}
    target='_blank'
    rel='noopener noreferrer'
    {...other}
  >
    <FontAwesomeIcon icon={['fab', icon]} className='text-2xl' fixedWidth />
  </SocialIcon>
);

const SocialLinks = ({ social }) => {
  const initialSocials =
    localStorage && localStorage.getItem('socials')
      ? JSON.parse(localStorage.getItem('socials'))
      : Object.keys(social);

  const [socials, setSocials] = useState(initialSocials);

  const onDragEnd = ({ source, destination }) => {
    if (!destination) return;

    setSocials(socials => {
      const [dragged] = socials.splice(source.index, 1);
      socials.splice(destination.index, 0, dragged);
      localStorage && localStorage.setItem('socials', JSON.stringify(socials));
      return socials;
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='socials' direction='horizontal'>
        {({ innerRef, droppableProps, placeholder }) => (
          <div ref={innerRef} {...droppableProps} className='row'>
            {socials.map((website, index) => (
              <Draggable key={website} draggableId={website} index={index}>
                {({ innerRef, draggableProps, dragHandleProps }) => (
                  <SocialLink
                    innerRef={innerRef}
                    {...draggableProps}
                    {...dragHandleProps}
                    link={social[website]}
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
