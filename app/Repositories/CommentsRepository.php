<?php

namespace Hunt\Repositories;

use Hunt\Comment;
use Hunt\Feature;
use Hunt\Concerns\DataWithPagination;

class CommentsRepository
{
    use DataWithPagination;

    /**
     * Add a new feature suggest.
     *
     * @param int     $featureId
     * @param string  $message
     * @return \Hunt\Comment
     */
    public function add($featureId, $message)
    {
        return Comment::create([
            'user_id' => auth('api')->user()->id,
            'feature_id' => $featureId,
            'message' => $message
        ]);
    }

    /**
     * Get comments related to the given feature.
     *
     * @param int    $limit
     * @param string $searchTerms
     * @param int    $featureId
     * @return array
     */
    public function get($limit = 10, $searchTerms = '', $featureId)
    {
        $comments = null;

        if(! empty($searchTerms)) {
            $comments = Comment::with('user')
                                ->whereFeatureId($featureId)
                                ->where("message", "like", "%$searchTerms%");
        } else {
            $comments = Comment::with('user')->whereFeatureId($featureId);
        }

        return $this->dataWithPagination($comments, $limit);
    }

    /**
     * Remove an existing comment.
     *
     * @param int $featureId
     * @param int $commentId
     */
    public function remove($featureId, $commentId)
    {
        Comment::findOrFail($commentId)->delete();
    }

    /**
     * Update an existing comment.
     *
     * @param int    $featureId
     * @param int    $commentId
     * @param string $message
     */
    public function update($featureId, $commentId, $message)
    {
        $comment = Comment::findOrFail($commentId);

        $comment->update([
            'feature_id' => $featureId,
            'message' => $message
        ]);
    }

    /**
     * Get a comment by the given feature and comment id.
     *
     * @param int $featureId
     * @param int $commentId
     * @return Feature
     */
    public function getCommentById($featureId, $commentId)
    {
        return Comment::with('user')
            ->whereFeatureId($featureId)->whereId($commentId)->first();
    }
}