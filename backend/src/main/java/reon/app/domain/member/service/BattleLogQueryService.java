package reon.app.domain.member.service;

import reon.app.domain.member.dto.res.BattleLogResponse;

import java.util.List;

public interface BattleLogQueryService {
    List<BattleLogResponse> findBattleLogsById(Long id);
}
