const matchService = {
  getRecentMatchInfo(db, user_id){
    return db
      .from('matches')
      .select('*')
      .where('matches.user_id', user_id);
  },
  postMatchInfo(db, user_id, body){
    return db
      .from('matches')
      .select('*')
      .where('matches.user_id', user_id)
      .insert({
        match_id: body.matchId,
        user_id: user_id,
        happy: body.happy,
        work: body.work,
        question: body.question,
        notes: body.notes
      })
      .returning('*');
  },
  updateMatchInfo(db, user_id, body){
    return db
      .from('matches')
      .select('*')
      .where('matches.user_id', user_id)
      .update({
        happy: body.happy,
        work: body.work,
        question: body.question,
        notes: body.notes
      })
      .returning('*');
  }
};

module.exports = matchService;