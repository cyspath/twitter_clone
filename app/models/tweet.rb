class Tweet < ActiveRecord::Base

  belongs_to :user

  def as_json(option={})
    super(methods: [:name])
  end

  def name
    user.display_name
  end

  def gravatar
    hash = Digest::MD5.hexdigest(user.email)
    "http://www.gravatar.com/avatar/#{hash}"
  end

end
