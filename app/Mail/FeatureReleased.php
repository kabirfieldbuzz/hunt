<?php

namespace App\Mail;

use App\User;
use App\Feature;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class FeatureReleased extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Instance of user.
     *
     * @var User
     */
    public $user;

    /**
     * Instance of feature.
     *
     * @var Feature
     */
    public $feature;

    /**
     * Create a new message instance.
     *
     * @param User $user
     * @param Feature $feature
     */
    public function __construct(User $user, Feature $feature)
    {
        $this->user = $user;

        $this->feature = $feature;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $appName = config('app.name');

        return $this->from(env('FROM_EMAIL'))
                    ->subject("[{$appName}] New Feature Released")
                    ->view('mail.new-released');
    }
}
