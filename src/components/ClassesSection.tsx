const classes = [
  {
    name: 'Strength Training',
    time: '6:00 AM - 8:00 PM',
    trainer: 'Multiple Trainers',
    intensity: 'All Levels',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
  },
  {
    name: 'HIIT Workout',
    time: '7:00 AM & 6:00 PM',
    trainer: 'Coach Rajesh',
    intensity: 'High',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80',
  },
  {
    name: 'Yoga & Flexibility',
    time: '6:30 AM & 5:00 PM',
    trainer: 'Priya Menon',
    intensity: 'Low-Medium',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80',
  },
  {
    name: 'Cardio Blast',
    time: '5:30 AM & 7:00 PM',
    trainer: 'Coach Arun',
    intensity: 'High',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80',
  },
];

const ClassesSection = () => {
  return (
    <section id="classes" className="py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">Our Programs</p>
          <h2 className="section-title text-foreground mb-6">
            GROUP <span className="text-gradient">CLASSES</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Join our energetic group sessions led by expert trainers. From high-intensity workouts to mindful yoga.
          </p>
        </div>

        {/* Classes Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {classes.map((classItem, index) => (
            <div
              key={classItem.name}
              className="group relative overflow-hidden rounded-lg aspect-[16/10] cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={classItem.image}
                alt={classItem.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs uppercase tracking-wider rounded">
                    {classItem.intensity}
                  </span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl text-foreground mb-2 tracking-wide">
                  {classItem.name}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-muted-foreground text-sm">
                  <span>{classItem.time}</span>
                  <span className="hidden sm:block">•</span>
                  <span>{classItem.trainer}</span>
                </div>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-lg transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
