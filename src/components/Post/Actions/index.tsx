import { LensterPost } from '@generated/lenstertypes'
import React, { FC } from 'react'

import Collect from './Collect'
import Comment from './Comment'
import PostMenu from './Menu'
import Mirror from './Mirror'
import Vote from './Vote'

interface Props {
  post: LensterPost
}

const PostActions: FC<Props> = ({ post }) => {
  const postType = post?.metadata?.attributes[0]?.value

  return postType !== 'community' ? (
    <div className="flex gap-3 items-center pt-3 -ml-2 text-gray-500">
      <Vote post={post} />
      <Comment post={post} />
      <Mirror post={post} />
      {post?.collectModule?.__typename !== 'RevertCollectModuleSettings' &&
        postType !== 'crowdfund' && <Collect post={post} />}
      <PostMenu post={post} />
    </div>
  ) : null
}

export default PostActions
