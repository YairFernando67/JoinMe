class Event < ApplicationRecord
  belongs_to :creator, class_name: "User"
  has_many :invitations, foreign_key: :event_id
  has_many :attendees, through: :invitations, source: :attendee

  validates :location, presence: true
  validates :date, presence: true
  validates :title, presence: true, length: {minimum:5}
  validates :description, presence: true, length: {minimum:10, maximum:300}

  scope :upcoming, -> { where('date >= ?', DateTime.now)}
  scope :passed, -> { where('date < ?', DateTime.now)}
end
