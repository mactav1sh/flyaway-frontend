import React from 'react';

import TagListItem from './TagListItem';

interface IProps {
  tags: string[];
}

const TagList = ({ tags }: IProps) => {
  return (
    <ul className="flex flex-wrap ">
      {tags.map((tag) => (
        <TagListItem key={Math.random()} tag={tag} />
      ))}
    </ul>
  );
};

export default TagList;
