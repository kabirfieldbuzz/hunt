<?php

namespace App;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * An array of developers list.
     *
     * @var array
     */
    protected static $developers = [
      'iftekhersunny@hotmail.com'
    ];

    /**
     * Determine given email is developer or not.
     *
     * @param string $email
     * @return bool
     */
    public static function developer($email)
    {
        return in_array($email, static::$developers);
    }

    /**
     * Get all developers.
     *
     * @return array
     */
    public static function developers()
    {
        return static::$developers;
    }
}
